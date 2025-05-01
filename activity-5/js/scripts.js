var data = [
    {
        name: 'emmet',
        description: 'Emmet is the number one code snippet tool.',
        author: 'emmetio',
        url: 'https://atom.io/packages/emmet',
        downloads: 1662209,
        stars: 2534,
        price: 10.50,
        selector: 'p1'
    },
    {
        name: 'atom-beautify',
        description: 'The atom-beautify package will clean up your code, and make it more readable.',
        author: 'Glavin001',
        url: 'https://atom.io/packages/atom-beautify',
        downloads: 4228040,
        stars: 4541,
        price: 6.75,
        selector: 'p2'
    }
];

function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function () {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function () {
        return this.stars.toLocaleString();
    };
}

var getTodaysDate = function () {
    var today = new Date();
    return today.toDateString();
};

var getEl = function (id) {
    return document.getElementById(id);
};

var writePackageInfo = function (package) {
    var selector = package.selector,
        nameEL = getEl(selector + '-name'),
        descEL = getEl(selector + '-description'),
        authEL = getEl(selector + '-author'),
        downloadEL = getEl(selector + '-downloads'),
        starsEL = getEl(selector + '-stars');

    nameEL.textContent = package.name;
    descEL.textContent = package.description;
    authEL.textContent = package.author;
    downloadEL.textContent = package.getFormattedDownloads();
    starsEL.textContent = package.getFormattedStars();
};

var init = function () {
    var dateEL = getEl('date');
    dateEL.textContent = getTodaysDate();

    var emmet = new Package(data[0]);
    writePackageInfo(emmet);

    var beautify = new Package(data[1]);
    writePackageInfo(beautify);

}

init();