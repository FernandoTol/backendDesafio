import { Publication } from "../models/publication.model.js"
//* va .populate
const publicationsAll = () => Publication.find({}).populate('user')

async function addComment(newComment, userCurrent) {
    console.log({ ...newComment, author: userCurrent });

    let commentCreated = await Comment.create({
        ...newComment,
        author: userCurrent,
    });

    await Post.findByIdAndUpdate(newComment.post_id, {
        $push: { comments: commentCreated._id },
    });

    return commentCreated;
}

function deleteById(Publication) {
    return Comment.findByIdAndDelete(idComment);
}

function update(idComment, unupdatedComment) {
    return Comment.findByIdAndUpdate(idComment, unupdatedComment, { new: true })
}

export { publicationsAll }