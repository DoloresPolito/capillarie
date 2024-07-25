export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px", marginTop:"100px" }}>
      <h1 style={{color:"#44b9cc"}}>404 - Page not found</h1>
      <p style={{color:"#493e36",marginTop:"30px", marginBottom:"30px"}}>Sorry, the page you are looking for does not exist.</p>
      <a style={{color:"#493e36"}} href="/">Go back to Home</a>
    </div>
  );
}
