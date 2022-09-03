const app = Vue.createApp({
	data() {
		return {
			readMore: false,
			experienceCard: false,
			contactMore: false
		}
	},
	methods: {
		statusButton() {
			this.readMore = true;
		},
		statusExperience() {
			this.experienceCard = true;
		},
		statusContact() {
			this.contactMore = true;
		},
		resetCard() {
			this.readMore = false;
			this.experienceCard = false;
			this.contactMore = false;
		}
	}
});

app.mount('#app');