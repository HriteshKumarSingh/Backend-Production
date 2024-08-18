import { apiError } from '../utils/apiError.js';
import { apiResponse } from '../utils/apiResponse.js';
import {asyncHandler} from '../utils/asyncHandler.js'
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"


const registerUser = asyncHandler( async(req , res) => {
    // res.status(200).json({
    //     message : "OK"
    // })

    const {fullname, email, username, password} = req.body
    console.log("Email :",email);

    if(
        [fullname, email, username, password].some((field) => {
            return field?.trim() === ""
        })
    ){
        throw new apiError(400, "All fiels are required")
    }

    const existedUser = User.findOne({
        $or : [{username} , {email}]
    })

    if(existedUser){
        throw new apiError(409 , "User with email or email already exist")
    }


    const avtarLocalPath = req.files?.avtar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if(!avtarLocalPath){
        throw new apiError(400, "Avtar file is required")
    }

    const avtar = await uploadOnCloudinary(avtarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)


    if(!avtar){
        throw new apiError(400, "Avtar file is required")
    }


    const user = await User.create({
        fullname,
        avtar : avtar.url,
        coverImage : coverImage?.url || "",
        email,
        password,
        username : username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new apiError(500, "Something went wrong while registering a user")
    }

    return res.status(201).json(
        new apiResponse(200, createdUser, "User registerd successfully")
    )

})





export {registerUser}