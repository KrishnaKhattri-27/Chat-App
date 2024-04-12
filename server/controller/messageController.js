import Conversation from "../models/ConversationModel.js";
import Message from "../models/messageModel.js";

export const sendMessaage = async (req, res) => {
  try {
    const { message } = req.body;
    const recieverID = req.params.id;
    const senderID = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderID, recieverID] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderID, recieverID],
      });
    }

    const newMessage = new Message({
      senderID,
      recieverID,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
      await Promise.all([conversation.save(), newMessage.save()]);
      //   await newMessage.save();
      //   await conversation.save();
      res.status(201).json(newMessage);
    }
  } catch (error) {
    console.log("Error in signup", error);
    res.status(500).json({ error: "messageController internal server error" });
  }
};

export const getMessages=async(req,res)=>{
  const recieverID = req.params.id;
  const senderID = req.user._id;

  try {
    const conversation = await Conversation.findOne({
      participants: { $all: [senderID, recieverID] },
    }).populate('messages');
    res.status(200).json(conversation);
  } catch (error) {
    console.log("Error in getting converstions", error);
    res.status(500).json({ error: "message fetching internal server error" });
  }


}
