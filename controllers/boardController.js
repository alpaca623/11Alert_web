export const boardList = (req, res) => {
    res.render('boardList');
}

export const boardDetail = (req, res) => {
    console.log(req.params);
    
    res.render('boardDetail');
}