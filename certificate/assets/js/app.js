const app = Vue.createApp({
	data() {
		return {
			baseCard: true,
			bwaCard: false,
			codepolitanCard: false,
			myskillCard: false,
			udemyCard: false
		}
	},
	methods: {
		bwa() {
			this.baseCard = false;
			this.bwaCard = true;
		},
		codepolitan() {
			this.baseCard = false;
			this.codepolitanCard = true;
		},
		myskill() {
			this.baseCard = false;
			this.myskillCard = true;
		},
		udemy() {
			this.baseCard = false;
			this.udemyCard = true;
		},
		backTo() {
			this.baseCard = true;
			this.bwaCard = false;
			this.codepolitanCard = false;
			this.myskillCard = false;
			this.udemyCard = false;
		}
	}
});

app.mount('#certificate');