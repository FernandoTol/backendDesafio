const errors = (error, request, response) => {
    response.status(error.status || 500).json({
        succes: false,
        message: 'Server internal error'
    })
}
export default errors