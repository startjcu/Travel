<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1902/80/80d7d3ef350b7fffa3.water.jpg_200x200_01e78b60.jpg',
        title: '东部华侨城茶溪谷',
        desc: '东部华侨城茶溪谷简介'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201307/18/f25ac054eec3804dc8d65eac.jpg_200x200_a008b6ca.jpg',
        title: '海洋奇梦馆',
        desc: '海洋奇梦馆简介'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1902/80/80d7d3ef350b7fffa3.water.jpg_200x200_01e78b60.jpg',
        title: '东部华侨城茶溪谷',
        desc: '东部华侨城茶溪谷简介'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.title
		margin-top: .2rem
		line-height: .8rem
		background: #eee
		text-indent: .2rem
	.item
		overflow: hidden
		display: flex
		height: 1.9rem
		.item-img
			width: 1.7rem
			height: 1.7rem
			padding: .1rem
		.item-info
			flex: 1
			padding: .1rem
			min-width: 0
			.item-title
				line-height: .54rem
				font-size: .32rem
				ellipsis()
			.item-desc
				line-height: .4rem
				color: #ccc
				ellipsis()
			.item-button
				line-height: .44rem
				margin-top: .16rem
				background: #ff9300
				padding: 0 .2rem
				border-radius: .06rem
				color: #fff
</style>
