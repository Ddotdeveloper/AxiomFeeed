import mongoose,{Schema,Document} from 'mongoose';
// This the Interface of the Message Schema 
export interface Message extends Document{
    content : string;
    createdAt : Date;
};

const MessageSchema : Schema<Message> = new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now,
    }
})

export interface User extends Document{
    username:string,
    email:string,
    password: string,
    verifyCode : string,
    verifyCodeExpiry:Date,
    isVerified:boolean,
    isAcceptingMessages: boolean;
    messages: Message[];
}

// updated User Schema 
const UserSchema : Schema<User> = new mongoose.Schema({
    username:{
        type: String,
        required: [true,'UserName is required'],
        unique: true,
        match: [/.+\@.+\..+/, 'Please use a valid email address'],
    },
    password:{
        type:String,
        required:[true,'Password req'],
    },
    verifyCode:{
        type:String,
        required:[true,'Verify Code is Required'],
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, 'Verify Code Expiry is required'],
      },
      isVerified: {
        type: Boolean,
        default: false,
      },
      isAcceptingMessages: {
        type: Boolean,
        default: true,
      },
      messages: [MessageSchema],
});

 const UserModel = (mongoose.models.User as mongoose.Model<User> || mongoose.model<User>('User',UserSchema) )

export default UserModel;