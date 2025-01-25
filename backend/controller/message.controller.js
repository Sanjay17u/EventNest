import { Message } from "../models/messageSchema.js";

export const sendMessage = async (req, res,) => {
  try {
    const { username, email, subject, message } = req.body;

    if (!username || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All Fields Required",
      });
    }

    await Message.create({ username, email, subject, message });
    res.status(200).json({
      success: true,
      message: "Message Sent Successfully",
    });
  } catch (error) {

    if (error.name === "ValidationError") {
        let errorMessage = "";
        if (error.errors.username) {
          errorMessage += error.errors.username.message + " ";
        }
        if (error.errors.email) {
          errorMessage += error.errors.email.message + " ";
        }
        if (error.errors.subject) {
          errorMessage += error.errors.subject.message + " ";
        }
        if (error.errors.message) {
          errorMessage += error.errors.message.message + " ";
        }
        return res.status(400).json({
          success: false,
          message: errorMessage,
        });
      }
  
      return res.status(500).json({
        success: false,
        message: "Unknown Error",
      });
  }
};
