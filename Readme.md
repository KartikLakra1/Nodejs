# NodeJs

## 1. REPL (read, eval, print. loop)

working with integrated terminal, streamlines interactive shell.

## 2. First Node Server

### 2.1 How DNS Works?

#### 1.Domain Name Entry:

User Types a domain( e.g. www.example.com) into brower.

#### 2.DNS Query:

The browser sends a DNS query to resolve the domain into an IP address.

#### 3.DNS Server:

Provides the correct IP address for the domain.

#### 4.Brower Connects:

The browser uses the IP to connect to the web server and loads the website.

## How DNS Actually Works?

#### 1.Root DNS:

Acts as the starting point for DNS resolution. It directs queries to the correct TLD server (e.g.. .com,.org).

#### 2.TLD (top-level Domain) DNS:

Handles queries for specific top-level domains (e.g. .com,.net) and directs them to the authoritative DNS server (e.g. Verisign for .com, PIR for .org)

#### Authoritative DNS:

Contains the actual IP address of the domaina nd answers DNS queries with this information (e.g. Cloudflare, Google DNS).

## HOW WEB WORKS?

### 1. Client Request Initiation:

The client (browser) initiated a network call by entering URL.

### 2. DNS resolution:

The browser contacts a DNS server to get the IP address of the domain.

### 3. TCP Connection:

The browser established a TCP connection with the server's IP address.

### 4.HTTP Request:

The browser sends a HTTP request to the server.

### 5.Server Processing:

The server processes the request and prepares a response.

### 6.HTTP Response:

The server sends a HTTP response back to the client.

### 7.Network Transmission:

The response travels back to the client over the network.

### 8.Client Receives Response:

The browser receives and interprests the response.

### 9.Rendering:

The browser renders the content of the response and displays it to the user.
