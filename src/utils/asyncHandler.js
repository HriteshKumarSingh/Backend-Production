const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }



























// const asyncHandler = (fn) => () => {}

// const asyncHandler = (fn) => {
//     return async() => {
//         try {
//             await fn(req , res , next)
//         } catch (error) {
//             res.status(error.status || 500).json({
//                 success : false,
//                 message : error.message
//             })
//         }
//     }
// }