const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async function promotionDienMayChoLon(req, res) {
    const {url} = req.body;
    try {
        // Khởi tạo biến chứa các thẻ <img> HTML
        let imgTags = '';
        let imgTags2 = '';
        let imgTags3 = '';
        let imgTags4 = '';
        let imgTags5 = '';
        let imgTags6 = '';
        let imgTags7 = '';
        let imgTags8 = '';
        let imgTags9 = '';
        let imgTags10 = '';

        // Fetch dữ liệu từ URL
        const response = await axios.get(`${url}?cachebuster=${new Date().getTime()}`);
        const htmlContent = response.data;

        // Load nội dung HTML bằng cheerio
        const $ = cheerio.load(htmlContent);
        const sectionContent = $('section').html();
        // sectionContent
        if (sectionContent) {
            const $section = await cheerio.load(sectionContent);

            // Xử lý div với bg-tophome
            const divContent = $section('.bg-tophome').html();
            if (divContent) {
                const $div = cheerio.load(divContent);
                const imgElements = [];

                $div('img').each((i, elem) => {
                    const src = $div(elem).attr('src');
                    if (src) imgElements.push(src);
                });


                // console.log('imgElements', imgElements);


                if (imgElements.length > 0) {
                    imgTags = imgElements.map(src => `<img src="${src}" alt="Image">`).join('');
                } else {
                    return res.send('<h1>Không tìm thấy</h1>');
                }
            } else {
                return res.send('<h1>Không tìm thấy</h1>');
            }
        } else {
            return res.send('<h1>Không tìm thấy dữ liệu</h1>');
        }

        // big-banner
        const bigBanner = $('.big-banner').html();
        if (bigBanner) {
            const $div = cheerio.load(bigBanner);
            const imgElements = [];

            $div('img').each((i, elem) => {
                const src = $div(elem).attr('src');
                if (src) imgElements.push(src);
            });

            // console.log('imgElements', imgElements);

            if (imgElements.length > 0) {
                imgTags2 = imgElements.map(src => `<img src="${src}" alt="Image">`).join('');
            } else {
                return res.send('<h1>Không tìm thấy dữ liệu </h1>');
            }
        } else {
            return res.send('<h1>Không tìm thấy dữ liệu </h1>');
        }


        // Hot Deal
        const hotDeal = $('.hotdeal').html();
        if (hotDeal) {
            const $hotDeal = cheerio.load(hotDeal);
            const imgElements = [];

            $hotDeal('img').each((i, elem) => {
                const src = $hotDeal(elem).attr('src');
                if (src) imgElements.push(src);
            });

            console.log('$hotDeal', imgElements);

            if (imgElements.length > 0) {
                imgTags3 = imgElements.map(src => `<img src="${src}" alt="Image">`).join('');
            } else {
                return res.send('<h1>Không tìm thấy dữ liệu </h1>');
            }
        } else {
            return res.send('<h1>Không tìm thấy dữ liệu </h1>');
        }

        // Tuần lễ thương hiệu
        const promoAnother = $('.prd-another').html();
        if (promoAnother) {
            // Sử dụng đúng biến promo7day để tạo cheerio object
            const $promoAnother = cheerio.load(promoAnother);
            const imgElements = [];

            $promoAnother('img').each((i, elem) => {
                const src = $promoAnother(elem).attr('src');
                if (src) imgElements.push(src);
            });

            if (imgElements.length > 0) {
                imgTags5 = imgElements.map(src => `<img src="${src}" alt="Image">`).join('');
            } else {
                return res.send('<h1>Không tìm thấy dữ liệu </h1>');
            }
        } else {
            return res.send('<h1>Không tìm thấy dữ liệu </h1>');
        }
        // 7 ngày
        const promo7day = $('.promo-7day').html();
        if (promo7day) {
            const $promo7day = cheerio.load(promo7day);  // Sử dụng đúng biến promo7day
            const imgElements = [];

            $promo7day('img').each((i, elem) => {
                const src = $promo7day(elem).attr('data-src');
                if (src) imgElements.push(src);
            });

            console.log('promo7day', imgElements);

            if (imgElements.length > 0) {
                // imgTags4 = imgElements.map(src => `<img src="${src}" alt="Image">`).join('');
                imgTags4 = `<img src="${imgElements[0]}" alt="Image">`;
            } else {
                return res.send('<h1>Không tìm thấy dữ liệu </h1>');
            }
        } else {
            return res.send('<h1>Không tìm thấy dữ liệu </h1>');
        }
        // Has banner
        const hasBanner = $('.promo-muanong').html();
        if (hasBanner) {
            const $hasBanner = cheerio.load(hasBanner);  // Sử dụng đúng biến promo7day
            const imgElements = [];

            $hasBanner('img').each((i, elem) => {
                const src = $hasBanner(elem).attr('src');
                if (src) imgElements.push(src);
            });

            // console.log('hasBanner', imgElements);

            if (imgElements.length > 0) {
                // imgTags4 = imgElements.map(src => `<img src="${src}" alt="Image">`).join('');
                imgTags6 = `<img src="${imgElements[0]}" alt="Image">`;
            } else {
                return res.send('<h1>Không tìm thấy dữ liệu </h1>');
            }
        } else {
            return res.send('<h1>Không tìm thấy dữ liệu </h1>');
        }
        // TradeMart
        const trademark = $('.trademark').html();
        // console.log('trademark',trademark)
        if (trademark) {
            const $trademark = cheerio.load(trademark);
            const imgElements = [];

            $trademark('img').each((i, elem) => {
                const src = $trademark(elem).attr('data-src');
                if (src) imgElements.push(src);
            });

            // console.log('$trademark', imgElements);

            if (imgElements.length > 0) {
                // imgTags4 = imgElements.map(src => `<img src="${src}" alt="Image">`).join('');
                imgTags7 = imgElements.map(src => `<img src="${src}" alt="Image">`).join('')
            } else {
                return res.send('<h1>Không tìm thấy dữ liệu </h1>');
            }
        } else {
            return res.send('<h1>Không tìm thấy dữ liệu </h1>');
        }

        // Chuỗi mới deal khủng
        const newChain = $('.newchain').html();
        console.log('trademark',newChain)
        if (newChain) {
            const $newchain = cheerio.load(newChain);
            const imgElements = [];

            $newchain('img').each((i, elem) => {
                const src = $newchain(elem).attr('src');
                if (src) imgElements.push(src);
            });
            console.log('$trademark', imgElements);

            if (imgElements.length > 0) {
                // imgTags4 = imgElements.map(src => `<img src="${src}" alt="Image">`).join('');
                imgTags8 = imgElements.map(src => `<img src="${src}" alt="Image">`).join('')
            } else {
                return res.send('<h1>Không tìm thấy dữ liệu </h1>');
            }
        } else {
            return res.send('<h1>Không tìm thấy dữ liệu </h1>');
        }

        res.render('dienmayxanh', {
            imgTags,
            imgTags2,
            imgTags3,
            imgTags4,
            imgTags5,
            imgTags6,
            imgTags7,
            imgTags8,
            imgTags9,
            imgTags10
        });

    } catch (error) {
        res.status(500).send('Lỗi dữ liệu không thể lấy được dữ liệu của Điện Máy Xanh, vui lòng load lại dữ liệu thêm lần nữa, Mai Linh tình yêu của anh ơi');
    }
};
