function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="btn">Send</button>
      </form>
      <p>Email: youremail@example.com</p>
    </section>
  );
}

export default Contact;
