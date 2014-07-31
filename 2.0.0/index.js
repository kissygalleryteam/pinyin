/**
 * @fileoverview
 * @author
 * @module pinyin
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     *
     * @class Pinyin
     * @constructor
     * @extends Base
     */
    function Pinyin(comConfig) {
        var self = this;
        //调用父类构造函数
        Pinyin.superclass.constructor.call(self, comConfig);
    }
    S.extend(Pinyin, Base, /** @lends Pinyin.prototype*/{

    }, {ATTRS : /** @lends Pinyin*/{

    }});
    return Pinyin;
}, {requires:['node', 'base']});



