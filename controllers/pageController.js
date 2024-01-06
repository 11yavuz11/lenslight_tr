const getIndexPage = (req, res) => {
    res.render('index', {
        link: 'index'
    });
};

const getAboutPage = (req, res) => {
    res.render('about', {
        link : 'about'
    });
};

const getRegisteraAge = (req, res) => {
    res.render('register', {
        link : 'register'
    });
};

const getLoginPage = (req, res) => {
    res.render('login', {
        link : 'login'
    });
};


export {getIndexPage,getAboutPage, getRegisteraAge, getLoginPage};