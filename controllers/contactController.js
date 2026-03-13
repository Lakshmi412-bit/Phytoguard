const Contact = require("../models/Contact");

exports.createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.json({ message: "Message saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error saving message" });
  }
};