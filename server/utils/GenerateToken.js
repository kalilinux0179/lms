import jwt from "jsonwebtoken";

const GenerateToken = (res, user) => {
    try {
        const token = jwt.sign(
            {
                userId: user._id,
            }, process.env.JWT_SECRET,
            {
                expiresIn: "1d",
            }
        )

        const cookieOptions = {
            httpOnly: true, // Prevents client-side JavaScript access
            sameSite: "strict", // Helps prevent CSRF attacks
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        };
        return res
            .status(200)
            .cookie("token", token, cookieOptions)
            .json({
                success: true,
                user
            })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to generate token.",
        });
    }
}

export default GenerateToken