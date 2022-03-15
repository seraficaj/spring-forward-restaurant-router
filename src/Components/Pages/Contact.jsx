function Contact() {
    return (
        <div>
            <h2 className="is-center">Contact Page</h2>
            <form action="/action_page.php">
                <label for="fname">First name:</label>
                <br />
                <input type="text" id="fname" name="fname" value="John" />
                <br />
                <label for="lname">Last name:</label>
                <br />
                <input type="text" id="lname" name="lname" value="Doe" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Contact;
