# Network

## HTTP and HTTPS

### Basic concepts of http and https

- http: is a standard (TCP) for client and server requests and responses, and is a hypertext transfer protocol used to transfer hypertext from a www server to a local browser.

- https: is a http channel with security as its goal, that is, an SSL layer is added to http for encryption. Its function is to establish an information security channel to ensure data transmission and the authenticity of the website.

### What are the differences and advantages and disadvantages between http and https?

- http is a hypertext transfer protocol, and information is transmitted in plain text. The https protocol is more secure than the http protocol. https is a secure SSL encrypted transmission protocol that can prevent data from being stolen or changed during transmission and ensure data integrity.

- The `default port` of the http protocol is 80, and the `default port` of https is 443.

- The http connection is very simple and stateless. The https handshake phase is relatively time-consuming, which will extend the page loading time by 50% and increase power consumption by 10%~20%.

- https caching is not as efficient as http, which will increase data overhead.

- https protocol requires a ca certificate, which is expensive. The more powerful the certificate, the higher the certificate fee.

- ssl certificate needs to be bound to a domain name.

### How the https protocol works

When the client uses https to communicate with the web server, there are several steps:

1. The client uses https url to access the server, which requires the web server to establish an ssl link.

2. After receiving the client's request, the web server will transmit the website's certificate (which contains the public key) to the client.

3. The client and the web server begin to negotiate the security level of the SSL link, that is, the encryption level.

4. The client browser establishes a session key through the security level agreed upon by both parties, and then encrypts the session key through the website's public key and transmits it to the website.

5. The web server `decrypts the session key through its own private key`.

6. The web server `encrypts the communication with the client through the session key`.

## TCP three-way handshake

First handshake: `When establishing a connection, the client sends a syn packet (syn=j) to the server and enters the SYN_SENT state, waiting for the server to confirm`; SYN: Synchronize Sequence Numbers.

Second handshake: `The server receives the syn packet and confirms the client's SYN` (ack=j+1), and also sends its own SYN packet` (syn=k), that is, a SYN+ACK packet. At this time, the server enters the SYN_RECV state;

Third handshake: `The client receives the server's SYN+ACK packet and sends a confirmation packet ACK (ack=k+1) to the server`. After this packet is sent, the client and server enter the ESTABLISHED (TCP connection successful) state, completing the three-way handshake.

> The packet transmitted during the handshake process does not contain data. After the three-way handshake is completed, the client and the server officially start to transmit data.

## TCP four-way handshake

1. The client process sends a connection release message and stops sending data. Release the data message header, FIN=1, and its sequence number is seq=u (equal to the sequence number of the last byte of the previously transmitted data plus 1). At this time, the client enters the FIN-WAIT-1 (terminate wait 1) state. TCP stipulates that even if the FIN segment does not carry data, it must consume a sequence number.

2. The server receives the connection release message and sends a confirmation message, ACK=1, ack=u+1, and carries its own sequence number seq=v. At this time, the server enters the CLOSE-WAIT (close wait) state. The TCP server notifies the high-level application process that the client is released in the direction of the server. At this time, it is in a semi-closed state, that is, the client has no data to send, but if the server sends data, the client still has to accept it. This state will continue for a while, which is the duration of the entire CLOSE-WAIT state.

3. After the client receives the confirmation request from the server, the client enters the FIN-WAIT-2 state, waiting for the server to send a connection release message (before that, it needs to receive the last data sent by the server).

4. After the server sends the last data, it sends a connection release message to the client, FIN=1, ack=u+1. Since it is in the semi-closed state, the server is likely to have sent some more data. Assuming that the sequence number at this time is seq=w, the server enters the LAST-ACK state and waits for the client's confirmation.

5. After the client receives the connection release message from the server, it must send a confirmation, ACK=1, ack=w+1, and its own sequence number is seq=u+1. At this time, the client enters the TIME-WAIT state. Note that the TCP connection has not been released at this time. It must enter the CLOSED state after 2∗∗MSL (maximum segment life) time, when the client revokes the corresponding TCB.

6. As long as the server receives the confirmation from the client, it will enter the CLOSED state immediately. Similarly, after revoking the TCB, the TCP connection is ended. It can be seen that the server ends the TCP connection earlier than the client.

## How does TCP/IP ensure the orderly and reliable transmission of data packets?

The byte stream is segmented and numbered, and then guaranteed by the two mechanisms of ACK reply and timeout retransmission.

1. In order to ensure the reliable delivery of data packets, the sender must keep the sent data packets in the buffer;

2. And start a timeout timer for each sent data packet;

3. If the response information sent by the other party is received before the timer times out (it may be a response to this packet or a response to the subsequent packet of this packet), the buffer occupied by the data packet is released;

4. Otherwise, the data packet is retransmitted until the response is received or the number of retransmissions exceeds the specified maximum number.

5. After receiving the data packet, the receiver first performs a CRC check. If it is correct, the data is handed over to the upper layer protocol, and then a cumulative response packet is sent to the sender to indicate that the data has been received. If the receiver happens to have data to send to the sender, the response packet can also be piggybacked in the data packet.

## The difference between TCP and UDP

TCP is `link-oriented`, while UDP is connectionless-oriented.

TCP only supports `unicast transmission`, and UDP provides unicast, multicast, and broadcast functions.

TCP's three-way handshake ensures the reliability of the connection; UDP is a connectionless, unreliable data transmission protocol. First of all, the unreliability is reflected in the lack of connection. Communication does not require the establishment of a connection, and no confirmation signal is sent for the received data. The sender does not know whether the data will be received correctly.

UDP's header overhead is smaller than TCP's, the data transmission rate is higher, and the real-time performance is better.

## HTTP request cross-domain problem

1. The principle of cross-domain

Cross-domain means that the browser cannot execute scripts from other websites. It is caused by the browser's "same-origin policy".

The same-origin policy is a security restriction imposed by the browser on JavaScript. As long as there is any difference in the "protocol, domain name, port", it is regarded as a different domain.

The principle of cross-domain is to "avoid the browser's security restrictions" in various ways.

2. Solution

When I first started the project, I used jsonp, but there were some problems. Using get request was not safe and carried less data. Later, I also used iframe, but it only worked when the main domain was the same, which also had some problems. Later, through understanding and learning, I found that it was more convenient to use proxy and proxy together, so I guided the backend to configure the server in this way, using proxy in development and nginx proxy on the server, so that both sides were convenient and efficient during the development process; now h5 has new features such as windows.postMessage()

- JSONP:

ajax requests are affected by the same-origin policy and cross-domain requests are not allowed, but the link in the src attribute of the script tag can access cross-domain js scripts. Using this feature, the server no longer returns data in JSON format, but returns a js code that calls a function, which is called in src, thus achieving cross-domain.

Steps:

1) Create a script tag

2) Set the interface address in the script's src attribute

3) The interface parameter must have a custom function name, otherwise the backend cannot return data

4) Receive the returned data by defining the function name

```javascript
//Dynamically create script
var script = document.createElement("script");

// Set callback function
function getData(data) {
  console.log(data);
}

//Set the src attribute of the script and set the request address
script.src = "http://localhost:3000/?callback=getData";

// Make the script effective
document.body.appendChild(script);
```

Disadvantages:

JSON only supports get, because script tags can only use get requests; JSONP requires the backend to cooperate to return data in a specified format.

- document.domain The base domain name is the same, but the subdomains are different

- window.name Use a browser window to load all domain names and share a window.name

- CORS CORS (Cross-origin resource sharing) Cross-origin resource sharing The server sets the support principle for CORS: After the server sets the Access-Control-Allow-Origin HTTP response header, the browser will allow cross-domain requests.

- proxy proxy The current common method is to set up a proxy through the server

- window.postMessage() Use the new h5 feature window.postMessage()

## The difference between Cookie, SessionStorage, and LocalStorage

<table align="center" style="width: 100%">
  <tr>
    <th>relation</th>
    <th>Cookie</th>
    <th>SessionStorage</th>
    <th>LocalStorage</th>
  </tr>
  <tr>
    <td>same</td>
    <td colspan="3">Stored on the client</td>
  </tr>
  <tr>
    <td>Data size</td>
    <td>Size cannot exceed 4k</td>
    <td colspan="2">Much larger than cookies, can reach 5M+</td>
  </tr>
  <tr>
    <td>Expiration time</td>
    <td>Valid until the set expiration time</td>
    <td>Permanent storage, data will not be lost after the browser is closed unless the data is deleted actively</td>
    <td>Automatically deleted after the current browser window is closed</td>
  </tr>
  <tr>
    <td>Storage method</td>
    <td>Data will be automatically transferred to the server</td>
    <td colspan="2">Data is saved locally</td>
  </tr>
</table>

## Packet sticking problem analysis and countermeasures

TCP packet sticking means that several packets sent by the sender are stuck together into one packet when they are received by the receiver. From the receiving buffer, the head of the next packet is immediately followed by the tail of the previous packet.

Reasons for packet sticking:

Simply put, it occurs in stream transmission. UDP will not have packet sticking because it has message boundaries

There are two types of packet sticking, one is that `the packets stuck together are all complete data packets`, and the other is that `the packets stuck together are incomplete packets`.

In order to avoid the sticking phenomenon, the following measures can be taken:

- For the sticking phenomenon caused by the sender, users can avoid it through programming settings. `TCP provides an operation instruction push to force data to be transmitted immediately. After receiving the operation instruction, the TCP software will immediately send out the data of this segment without waiting for the sending buffer to be full;

- For the sticking phenomenon caused by the receiver, measures such as optimizing program design, streamlining the workload of the receiving process, and increasing the priority of the receiving process can be taken to enable it to receive data in time, thereby trying to avoid the sticking phenomenon;

- Controlled by the receiver, a packet of data is received multiple times according to the structure field, and then merged manually, so as to avoid sticking. Multiple packets are sent.

The three measures mentioned above all have their shortcomings:

- Although the first programming setting method can avoid packet sticking caused by the sender, it turns off the optimization algorithm, reduces the network transmission efficiency, and affects the performance of the application. It is generally not recommended;

- The second method can only reduce the possibility of packet sticking, but it cannot completely avoid packet sticking. When the transmission frequency is high, or due to network bursts, the data packet may reach the receiver faster in a certain period of time, and the receiver may still not have time to receive it, resulting in packet sticking;

- Although the third method avoids packet sticking, the efficiency of the application is low and it is not suitable for real-time applications.

