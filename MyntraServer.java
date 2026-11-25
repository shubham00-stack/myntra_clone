import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;

import java.io.File;
import java.io.FileInputStream;
import java.io.OutputStream;
import java.io.IOException;
import java.net.InetSocketAddress;

/**
 * Basic Java HTTP Server for Myntra Clone Assignment
 * No external dependencies required (Uses standard Java SE com.sun.net.httpserver)
 * 
 * To compile and run:
 *   javac MyntraServer.java
 *   java MyntraServer
 * 
 * Then open your browser at: http://localhost:8080
 */
public class MyntraServer {

    private static final int PORT = 8080;

    public static void main(String[] args) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);
        
        // Static file handler for HTML, CSS, and JavaScript
        server.createContext("/", new StaticFileHandler());
        
        // Simple API endpoint returning a JSON test response
        server.createContext("/api/status", new ApiStatusHandler());

        server.setExecutor(null); // Default executor
        System.out.println("====================================================");
        System.out.println(" Myntra Clone Java Server Started on Port " + PORT);
        System.out.println(" Open in browser: http://localhost:" + PORT);
        System.out.println(" Press Ctrl + C to stop the server");
        System.out.println("====================================================");
        server.start();
    }

    // Handler to serve index.html, style.css, script.js, login.html
    static class StaticFileHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String path = exchange.getRequestURI().getPath();
            if (path == null || path.equals("/")) {
                path = "/index.html";
            }

            File file = new File("." + path);
            if (!file.exists() || file.isDirectory()) {
                String response = "404 Not Found - Myntra Clone";
                exchange.sendResponseHeaders(404, response.length());
                OutputStream os = exchange.getResponseBody();
                os.write(response.getBytes());
                os.close();
                return;
            }

            // Determine MIME Content-Type
            String contentType = "text/plain";
            if (path.endsWith(".html")) contentType = "text/html";
            else if (path.endsWith(".css")) contentType = "text/css";
            else if (path.endsWith(".js")) contentType = "application/javascript";
            else if (path.endsWith(".svg")) contentType = "image/svg+xml";
            else if (path.endsWith(".png")) contentType = "image/png";
            else if (path.endsWith(".json")) contentType = "application/json";

            exchange.getResponseHeaders().set("Content-Type", contentType);
            exchange.sendResponseHeaders(200, file.length());

            OutputStream os = exchange.getResponseBody();
            FileInputStream fis = new FileInputStream(file);
            byte[] buffer = new byte[1024];
            int count;
            while ((count = fis.read(buffer)) >= 0) {
                os.write(buffer, 0, count);
            }
            fis.close();
            os.close();
        }
    }

    // Handler to demonstrate a basic Java REST endpoint
    static class ApiStatusHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String json = "{\"status\": \"OK\", \"app\": \"Myntra Clone\", \"author\": \"College Student\"}";
            exchange.getResponseHeaders().set("Content-Type", "application/json");
            exchange.sendResponseHeaders(200, json.length());
            OutputStream os = exchange.getResponseBody();
            os.write(json.getBytes());
            os.close();
        }
    }
}
