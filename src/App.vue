<template>
	<div id="app">
		<div class="wrapper">
			<div class="poster"><img src="./assets/poster.jpg" alt="Frank Klepacki and Tiberian Sons" /></div>
			<div class="favourite-list-songs">
				<ul>
					<li v-for="item in items" :key="item.id">
						<div>{{ item.song }}</div>
						<div class="button-and-counter">
							<button @click="incrementLikes(item)"><img src="./assets/heart-icon.svg" alt="" /></button>
							<div id="counter">{{ item.likes }}</div>
						</div>
					</li>
					<hr />
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { query, collection, getDocs, orderBy, updateDoc, doc } from 'firebase/firestore'
import { db } from './firebase.js'

export default (await import('vue')).defineComponent({
	data() {
		return {
			items: []
		}
	},
	created() {
		this.getItems()
	},
	methods: {
		async getItems() {
			const q = query(collection(db, 'songs'), orderBy('likes', 'desc'))
			const querySnap = await getDocs(q)

			querySnap.forEach(doc => {
				this.items.push({ id: doc.id, ...doc.data() })
			})
		},
		async incrementLikes(item) {
			const docRef = doc(db, 'songs', item.id)
			await updateDoc(docRef, {
				likes: item.likes + 1
			})
			item.likes += 1
			this.items.sort((a, b) => b.likes - a.likes)
		}
	}
})
</script>
