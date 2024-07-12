---
layout: doc
---

# vue-export2excel 导出表格

## 前言

> export2excel，是一个可以将 json 格式的数据导出成 excel 文档。这是作者对它的介绍 export2excel: export json to excel and download it;

一般用于 admin 后台管理系统中，实现快速将线上数据，导出为本地表格数据。

## 安装

在使用 export2excel 之前，还需要另外安装 xlxs 和 file-saver 这两个依赖。

```shell
# 安装 export2excel
# 本案例将直接下载js文件进行演示
$ npm install -s export2excel

# 安装 xlxs
$ npm install -s xlxs

# 安装 file-saver
$ npm install -s file-saver
```

## 使用

由于导出表格这个功能，并不是每一个页面需要用到的，所以一般使用局部引入的方式。

```html
<!-- .vue -->
<template>
  <div class="container">
    <input type="button" @click="exportExcel" />
  </div>
</template>

<script>
  import { export_json_to_excel } from "../static/Export2Excel"; // 文件引入

  export default {
    data() {
      return {
        data: [
          { name: "小明", age: "18" },
          { name: "小红", age: "17" },
          { name: "小军", age: "21" },
        ],
      };
    },

    methods: {
      exportExcel() {
        const tHeader = ["序号", "姓名", "年龄"]; // 表格头部
        const filterVal = ["id", "name", "age"]; // 表格头部对应的数据字段名，用来过滤
        const filename = "excel-name";
        const data = this.formatJson(filterVal, this.tableData);

        // 文件数据处理完成后，会自动下载
        export_json_to_excel({
          header: tHeader,
          data,
          filename,
        });
      },

      /**
       *  格式数据，对象数据格式 转为 json格式
       *  @filterVal  格式头
       *  @tableData  用来格式的表格数据
       */
      formatJson(filterVal, tableData) {
        return tableData.map((v) => {
          return filterVal.map((j) => {
            return v[j];
          });
        });
      },
    },
  };
</script>
```

formatJson 方法处理后的数据格式，大致是这样的。
![](/images/blog/plugin/b8c35e50d444f203a17f0713074f5145.png)

## 错误

报错: `Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'utils')`

原因：xlxs，file-saver npm 包版本可能存在冲突，建议重新安装指定版本依赖。

```shell
npm install --s xlsx@0.17.5
npm install --s file-saver@2.0.5
```

安装完成后重新运行项目。

## Export2Excel.js 源文件

找了一会，貌似没有找到官网的，便直接下载文件来用了。

```js
/* Export2Excel.js */
/* eslint-disable */
import { saveAs } from "file-saver";
import XLSX from "xlsx";

function generateArray(table) {
  var out = [];
  var rows = table.querySelectorAll("tr");
  var ranges = [];
  for (var R = 0; R < rows.length; ++R) {
    var outRow = [];
    var row = rows[R];
    var columns = row.querySelectorAll("td");
    for (var C = 0; C < columns.length; ++C) {
      var cell = columns[C];
      var colspan = cell.getAttribute("colspan");
      var rowspan = cell.getAttribute("rowspan");
      var cellValue = cell.innerText;
      if (cellValue !== "" && cellValue == +cellValue) cellValue = +cellValue;

      //Skip ranges
      ranges.forEach(function (range) {
        if (R >= range.s.r && R <= range.e.r && outRow.length >= range.s.c && outRow.length <= range.e.c) {
          for (var i = 0; i <= range.e.c - range.s.c; ++i) outRow.push(null);
        }
      });

      //Handle Row Span
      if (rowspan || colspan) {
        rowspan = rowspan || 1;
        colspan = colspan || 1;
        ranges.push({
          s: {
            r: R,
            c: outRow.length,
          },
          e: {
            r: R + rowspan - 1,
            c: outRow.length + colspan - 1,
          },
        });
      }

      //Handle Value
      outRow.push(cellValue !== "" ? cellValue : null);

      //Handle Colspan
      if (colspan) for (var k = 0; k < colspan - 1; ++k) outRow.push(null);
    }
    out.push(outRow);
  }
  return [out, ranges];
}

function datenum(v, date1904) {
  if (date1904) v += 1462;
  var epoch = Date.parse(v);
  return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
}

function sheet_from_array_of_arrays(data, opts) {
  var ws = {};
  var range = {
    s: {
      c: 10000000,
      r: 10000000,
    },
    e: {
      c: 0,
      r: 0,
    },
  };
  for (var R = 0; R != data.length; ++R) {
    for (var C = 0; C != data[R].length; ++C) {
      if (range.s.r > R) range.s.r = R;
      if (range.s.c > C) range.s.c = C;
      if (range.e.r < R) range.e.r = R;
      if (range.e.c < C) range.e.c = C;
      var cell = {
        v: data[R][C],
      };
      if (cell.v == null) continue;
      var cell_ref = XLSX.utils.encode_cell({
        c: C,
        r: R,
      });

      if (typeof cell.v === "number") cell.t = "n";
      else if (typeof cell.v === "boolean") cell.t = "b";
      else if (cell.v instanceof Date) {
        cell.t = "n";
        cell.z = XLSX.SSF._table[14];
        cell.v = datenum(cell.v);
      } else cell.t = "s";

      ws[cell_ref] = cell;
    }
  }
  if (range.s.c < 10000000) ws["!ref"] = XLSX.utils.encode_range(range);
  return ws;
}

function Workbook() {
  if (!(this instanceof Workbook)) return new Workbook();
  this.SheetNames = [];
  this.Sheets = {};
}

function s2ab(s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
  return buf;
}

export function export_table_to_excel(id) {
  var theTable = document.getElementById(id);
  var oo = generateArray(theTable);
  var ranges = oo[1];

  /* original data */
  var data = oo[0];
  var ws_name = "SheetJS";

  var wb = new Workbook(),
    ws = sheet_from_array_of_arrays(data);

  /* add ranges to worksheet */
  // ws['!cols'] = ['apple', 'banan'];
  ws["!merges"] = ranges;

  /* add worksheet to workbook */
  wb.SheetNames.push(ws_name);
  wb.Sheets[ws_name] = ws;

  var wbout = XLSX.write(wb, {
    bookType: "xlsx",
    bookSST: false,
    type: "binary",
  });

  saveAs(
    new Blob([s2ab(wbout)], {
      type: "application/octet-stream",
    }),
    "test.xlsx"
  );
}

export function export_json_to_excel({
  multiHeader = [],
  header,
  data,
  filename,
  merges = [],
  autoWidth = true,
  bookType = "xlsx",
} = {}) {
  /* original data */
  filename = filename || "excel-list";
  data = [...data];
  data.unshift(header);

  for (let i = multiHeader.length - 1; i > -1; i--) {
    data.unshift(multiHeader[i]);
  }

  var ws_name = "SheetJS";
  var wb = new Workbook(),
    ws = sheet_from_array_of_arrays(data);

  if (merges.length > 0) {
    if (!ws["!merges"]) ws["!merges"] = [];
    merges.forEach((item) => {
      ws["!merges"].push(XLSX.utils.decode_range(item));
    });
  }

  if (autoWidth) {
    /*设置worksheet每列的最大宽度*/
    const colWidth = data.map((row) =>
      row.map((val) => {
        /*先判断是否为null/undefined*/
        if (val == null) {
          return {
            wch: 10,
          };
        } else if (val.toString().charCodeAt(0) > 255) {
          /*再判断是否为中文*/
          return {
            wch: val.toString().length * 2,
          };
        } else {
          return {
            wch: val.toString().length,
          };
        }
      })
    );
    /*以第一行为初始值*/
    let result = colWidth[0];
    for (let i = 1; i < colWidth.length; i++) {
      for (let j = 0; j < colWidth[i].length; j++) {
        if (result[j]["wch"] < colWidth[i][j]["wch"]) {
          result[j]["wch"] = colWidth[i][j]["wch"];
        }
      }
    }
    ws["!cols"] = result;
  }

  /* add worksheet to workbook */
  wb.SheetNames.push(ws_name);
  wb.Sheets[ws_name] = ws;

  var wbout = XLSX.write(wb, {
    bookType: bookType,
    bookSST: false,
    type: "binary",
  });
  saveAs(
    new Blob([s2ab(wbout)], {
      type: "application/octet-stream",
    }),
    `${filename}.${bookType}`
  );
}
```

## 最后

文章参考：

[export2excel - npm](https://www.npmjs.com/package/export2excel/v/0.0.1)

[Vue 使用 Export2Excel 导出 excel、使用 xlsx 导入 excel](https://www.jianshu.com/p/23a1391e63d9)

[vue 导出 Excel 表格,utils 未定义是版本原因](https://blog.csdn.net/m0_59381867/article/details/123258340)
