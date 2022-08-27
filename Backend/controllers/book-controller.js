const { findByIdAndDelete, findByIdAndRemove } = require('../model/Book');
const Book=require('../model/Book')


// this method will return all the books that are stored in the book schema
const getAllBooks=async(req,res,next)=>{
    
    let books;
    try {
      books = await(Book.find());
    } catch (err) {
      console.log(err);
    }
    if (!books) {
      return res.status(404).json({ message: "No products found" });
    }
    return res.status(202).json({ books });
}
// this method get the books by their respective id
const getById=async (req,res,next)=>{
    const id=req.params.id;
    let book;
    try {
        book=await Book.findById(id);
        
    } catch (err) {
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"no book found"});
    }
    return res.status(200).json({book});
}
// this method will add the book in the book store app

const addBook=async(req,res,next)=>{
    const {name,author,description,price,available,image}=req.body;
    let book;
    try{
        book=new Book({
            name,
            author,
            description,
            price,
            available,
            image          
        })
        await book.save();
    }
    catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(500).json({message:'unable to add'})
    }
    return res.status(201).json({book})
}

// update the book
const updateBook=async (req,res,next)=>{
    const id=req.params.id;
    const {name,author,description,price,available,image}=req.body;
    let book;
    try {
        book=await Book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            available,
            image
        });
        book=await book.save();
        
    } catch (err) {
        console.log(err);
    }
    if(!book){
        return res.status(404).json(({message:'Unable to update the book'}))
    }
    return  res.status(200).json({book});
}
// deleting the book
const deleteBook=async (req,res,next)=>{
    const id=req.params.id;
    let book;
    try{
        book=await Book.findByIdAndRemove(id);
    }
    catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"can't delete the book by this id"});
    }
    return res.status(200).json({message:"book deleted successfully"});
};


exports.getAllBooks=getAllBooks;
exports.addBook=addBook;
exports.getById=getById;
exports.updateBook=updateBook;
exports.deleteBook=deleteBook;