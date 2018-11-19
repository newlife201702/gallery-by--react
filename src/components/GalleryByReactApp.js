'use strict';

var React = require('react/addons');
// var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.scss');

// var imageURL = require('../images/yeoman.png');

// 获取图片相关的数据
var imageDatas = require('../data/imageDatas.json');//是一个数组

// 利用自执行函数， 将图片名信息转成图片URL路径信息
(function getimageURL(imageDatasArr) {
    for (var i = 0, j = imageDatasArr.length; i < j; i++) {
        imageDatasArr[i].imageURL = require('../images/' + imageDatasArr[i].fileName);//通过require可以得到图片的路径
    }
})(imageDatas);

var GalleryByReactApp = React.createClass({
    render: function () {
        // return (
        //   <div className="main">
        //     <ReactTransitionGroup transitionName="fade">
        //       <img src={imageURL} />
        //     </ReactTransitionGroup>
        //   </div>
        // );

        return (
            <section className="stage" ref="stage">
                <section className="img-sec">
                < / section >
                <nav className="controller-nav">
                </nav>
            </section>
        );
    }
});
React.render(<GalleryByReactApp />, document.getElementById('content')); // jshint ignore:line

module.exports = GalleryByReactApp;
