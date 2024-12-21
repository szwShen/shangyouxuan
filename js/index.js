// var goodData = {
//     path: [
//         {
//             title: "手机、数码、通讯",
//             url: "###"
//         }, {
//             title: "手机",
//             url: "###"
//         }, {
//             title: "Apple苹果",
//             url: "###"
//         }, {
//             title: "iphone 6S系",
//         }
//     ],

window.onload = function () {
    navpathDataBind()

    function navpathDataBind() {
        var navPath = document.querySelector('.nav-path ul');

        for (let i = 0; i < goodData.path.length - 1; i++) {
            const item = goodData.path[i];
            var li = document.createElement('li');
            var a = document.createElement('a');
            var em = document.createElement('em');
            em.innerText = '/'

            a.innerText = item.title;
            a.href = item.url
            li.appendChild(a)
            li.appendChild(em)
            navPath.appendChild(li)
        }
        var li = document.createElement('li');
        li.innerText = goodData.path[goodData.path.length - 1].title
        navPath.appendChild(li)
    }

    pictureMove()

    function pictureMove() {

        var cur = document.querySelector('.content-left .img .move');
        var maskmove = document.querySelector('.maskmove')
        var box = document.querySelector('.content-left .img');
        var moveImg = document.querySelector('.maskmove img')
        console.log(maskmove);
        var boxWidth = box.clientWidth;
        var curWidth = cur.clientWidth;
        var boxHeight = box.clientHeight;
        var curHeight = cur.clientHeight;
        // 距离窗口左侧的距离

        box.addEventListener('mousemove', function (ev) {
            const rect = box.getBoundingClientRect();
            const distanceFromTop = rect.top; // 距离窗口顶部的距离
            const distanceFromLeft = rect.left;
            // console.log(ev.clientX);
            // cur.style.left=
            // 计算 位置 

            // 获取距离窗口顶部和左侧的距离
            var left = 0;
            var top = 0;
            cur.style.top = ev.clientY - distanceFromTop - curHeight / 2 + 'px';
            cur.style.left = ev.clientX - distanceFromLeft - curWidth / 2 + 'px';
            if (ev.clientY - distanceFromTop <= curHeight / 2) {
                cur.style.top = 0 + 'px'
            }
            if (ev.clientX - distanceFromLeft <= curWidth / 2) {
                cur.style.left = 0 + 'px'
            }
            if (boxHeight + distanceFromTop <= ev.clientY + curHeight / 2) {
                cur.style.top = boxHeight - curHeight + 'px'
            }
            if (ev.clientX + curWidth / 2 >= boxWidth + distanceFromLeft) {
                cur.style.left = boxWidth - curWidth + 'px'
            }

            // left = cur.style.left.toString();
            // const regex = /-?\d+(\.\d+)?/; // 匹配整数或小数，支持负号
            // const result = str.match(regex);
            top = (parseFloat)(cur.style.top);
            left = (parseFloat)(cur.style.left);
            var scale = (moveImg.offsetWidth - maskmove.clientWidth) / (box.clientWidth - cur.offsetWidth)
            moveImg.style.left = -scale * left + 'px';
            moveImg.style.top = -scale * top + 'px';



        })


    }
    // 小图片点击 和 图片移动事件
    imgclick()

    function imgclick() {


        var box = document.querySelector('.content-left .img img');
        var moveImg = document.querySelector('.maskmove img')
        var ul = document.querySelector(".xiaopigs")

        var data = goodData.imagessrc;
        var text = ''
        data.forEach(item => {
            text += `  <li>
        <img src="${item.s}" alt="" data-bigimg="${item.b}">
        </li>`
        })
        ul.innerHTML = text;


        ul.addEventListener('click', function (ev) {
            var src = ev.target.getAttribute('data-bigimg');
            //    console.log(box);  
            // box.src =  ev.target.getAttribute('src');
            box.src = ev.target.src;
            // console.log(box.src);
            moveImg.src = src;
        })

    }
    ulmove()

    function ulmove() {
        var left = document.querySelector('.imgs a.left');
        var right = document.querySelector('.imgs a.right');

        var xiaopigs = document.querySelector('.imgs .xiaopigs');
        var xiaopigslis = document.querySelectorAll('.imgs .xiaopigs li');
        var elementX = 0;
        var step = 120;
        // console.log(xiaopigslis);
        var maxX = xiaopigslis.length * 50 + (xiaopigslis.length + 1) * 10 - 400
        // console.log(maxX);
        left.addEventListener('click', function (ev) {
            // console.log('left');
            ev.preventDefault()
            ev.stopPropagation()
            elementX += step
            if (elementX >= 0) {
                elementX = 0
            }
            xiaopigs.style.left = elementX + 'px'
        });
        right.addEventListener('click', function (ev) {

            ev.preventDefault()
            ev.stopPropagation()
            elementX -= step
            if (elementX <= -maxX) {
                elementX = -maxX
            }
            xiaopigs.style.left = elementX + 'px'
        });


    }



    itemchoose()

    // support: "以旧换新，闲置手机回收 4G套餐超值抢 礼品购",
    // address: "广东省 深圳市 宝安区",
    // evaluateNum: 670000,
    function itemchoose() {
        var top_information = document.querySelector('.top_information');
        var {
            title,
            price,
            support,
            promoteSales,
            support,
            address,
            recommend,
            evaluateNum
        } = goodData.goodsDetail;
        var text = `  <h3>
                         ${title}
                    </h3>
                    <p>
                          ${recommend}
                    </p>
                    <div class="price_information">
                        <div class="top_price clearfix">
                            <span class="fl">价&nbsp;&nbsp;&nbsp;&nbsp;格</span>
                            <div class="fl price_info">
                                <i>￥</i>
                                <em>   ${price}</em>
                                <span>降价通知
                                </span></div>
                            <p class="fr">
                                <i>累计评价</i>
                                <span>${evaluateNum}</span>
                            </p>
                        </div>
                        <div class="bottom_price clearfix">
                            <span class="fl">促&nbsp;&nbsp;&nbsp;&nbsp;销</span>
                            <div class="fl">
                                <span>   ${promoteSales.type}</span>
                                <i>
                                      ${ promoteSales.content}
                                </i>
                            </div>
                        </div>
                    </div>
                    <p class="clearfix">
                        <span>支&nbsp;&nbsp;&nbsp;&nbsp;持</span>
                        <i>
                           ${support}
                        </i>
                    </p>
                    <p class="clearfix address">
                        <span>配送至</span>
                        <i>
                           ${address}
                        </i>
                    </p>`
        top_information.innerHTML = text;
    }



    bindcolor()


    function bindcolor() {
        var bottom_information = document.querySelector('.bottom_information')
        // console.log(bottom_information);


        const {
            crumbData
        } = goodData.goodsDetail;
        // {
        //     "title": "选择颜色",
        //     "data": [
        //         {
        //             type: "金色",
        //             changePrice: 0
        //         },
        //         {
        //             type: "银色",
        //             changePrice: 40
        //         },
        //         {
        //             type: "黑色",
        //             changePrice: 90
        //         },
        //     ]
        // }, color size version buy-formate

        crumbData.forEach((items, index) => {
            var div = document.createElement('div');
            var ite = document.createElement('span');
            ite.innerText = items.title;

            if (index == 0) {
                div.classList.add('color');
                div.setAttribute('data-type', 'color')

            } else if (index == 1) {
                div.classList.add('size');
                div.setAttribute('data-type', 'size')

            } else if (index == 2) {
                div.classList.add('version');
                div.setAttribute('data-type', 'version')

            } else if (index == 3) {
                div.classList.add('buy-formate');
                div.setAttribute('data-type', 'buy-formate')

            }
            div.appendChild(ite)
            items.data.forEach((item, index) => {
                var span = document.createElement('span')
                if (index == 0) {
                    span.classList.add('active')
                }
                span.innerText = item.type;
                span.setAttribute('data-price', item.changePrice);
                div.appendChild(span);
            })
            bottom_information.appendChild(div)
        })


    }
    changePrice(".size")
    changePrice(".color")
    changePrice(".version")
    changePrice(".buy-formate")

    function changePrice(className) {

        var ele = document.querySelector(className);
        ele.addEventListener('click', function (ev) {


            var spans = ele.querySelectorAll('span');
            [].slice.call(spans).forEach(item => {
                item.classList.remove('active')
            })
            ev.target.classList.add('active')

            shangqu(this.getAttribute('data-type'), ev.target)
            jisuanjiage()

        });



    }

    jisuanjiage()

    function jisuanjiage() {
        var sisyou = 5299;
        var price_info = document.querySelector('.price_info em');
        var bottom_information = document.querySelector('.bottom_information');
        var spans = bottom_information.querySelectorAll('span');
        var total = sisyou;
        [].slice.call(spans).forEach(item => {
            // (element.
            if (item.classList.contains('active')) {
                var minus = parseFloat(item.getAttribute('data-price'))
                console.log("minus", minus);
                total += minus

            }
            // console.log(total);
            price_info.innerText = total;
        })


    }

    function shangqu(type, ele) {
        console.log(type);
        //  <li> <span data=color>白金色</span> <a>x</a> </li>
        var choonse_item = document.querySelector(".choonse-item");

        var lis = choonse_item.querySelectorAll('li')
        console.log(lis);
        if (lis.length) {
            [].slice.call(lis).forEach(item => {

                if (item.getAttribute('data-type') == type) {
                    item.remove()
                }
            })
        }

        // if (isHave) {
        //     console.log("haved");
        //     isHave.remove()

        // };
        var li = document.createElement('li');
        li.setAttribute('data-type', type)
        var span = document.createElement('span')
        var a = document.createElement('a')
        a.innerText = "x";
        a.addEventListener('click', xiaqu)
        span.innerText = ele.innerText
        li.appendChild(span)
        li.appendChild(a);
        choonse_item.appendChild(li)



    }

    function xiaqu(ev) {
        ev.preventDefault()
        var ite = ev.target.parentNode.getAttribute('data-type')
        console.log(ite);

        var choonse_item = document.querySelector(".choonse-item");

        var lis = choonse_item.querySelectorAll('li');
        [].slice.call(lis).forEach(item => {

            if (item.getAttribute('data-type') == ite) {
                item.remove()
            }
        })
        var ele = document.querySelector('.' + ite);
        var spans = ele.querySelectorAll('span');
        [].slice.call(spans).forEach(item => {
            item.classList.remove('active')
        })
        spans[1].classList.add('active')
        jisuanjiage()


    }

}