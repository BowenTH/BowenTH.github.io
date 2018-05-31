<template>
	<div id="comment" :style="{marginTop: marginTop +'px'}">
		<hr/>
		<h4>评论</h4>
		<div>
			<input @keyup.enter="comment" v-model="commentWord" type="text" placeholder="留下你的见解，与更丢人沟通😁"
				style="width:200px">
		</div>
		<ul>
			<li v-for="item in comments" :key="item.msg" v-if="item.msg && item.commentIndex==commentIndex">
				<h4>{{item.msg}}</h4>
				{{item.createdAt}}</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios'
	export default {
		props: {
			commentIndex: {
				type: String,
				default: ''
			},
		},
		data() {
			return {
				comments: [],
				marginTop: 0,
				commentWord: ''
			}
		},
		mounted: function() {
				this.getHeight()
				this.getComment()
		},
		methods: {
			getHeight() {
				console.log(document.getElementById('comment').getBoundingClientRect());
				const toTop = document.getElementById('comment').getBoundingClientRect().top
				this.marginTop = toTop < 500 ? 500-toTop: 20
			},

			// 获取评论
			getComment() {
				axios.get(`http://localhost:3000/comment?search=${this.commentIndex}`)
				.then(data=>{
					const res = data.data
					if (res.code===0) {
						this.comments = res.data
					}
				}, err =>{
					console.log(JSON.stringify(err))
				})
			},

			comment () {
				axios.post('http://localhost:3000/comment', {msg: this.commentWord, commentIndex: this.commentIndex})
				.then(data=>{
					console.log(data)
					this.commentWord = ''
					this.getComment()
				}, err =>{
					console.log(JSON.stringify(err))
				})
			}
		},
	}
</script>

<style scoped>
#comment {
	height: 300px;
	width: 100%;
}
</style>