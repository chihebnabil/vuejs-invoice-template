const { createApp, ref, computed } = Vue;

createApp({
	setup() {
		const invoice = ref({
			number: '001',
			from: { name: 'Your Company', address: '123 Business St', details: 'City, Country' },
			to: { name: 'Client Name', address: '456 Client Ave', details: 'Client City, Country' },
			products: [
				{ title: 'Service 1', description: 'Description 1', qty: 1, price: 100 }
			],
			taxRate: 0.1
		});

		const newProduct = ref({ title: '', description: '', qty: 0, price: 0 });

		const getSubTotal = computed(() => {
			return invoice.value.products.reduce((total, product) => {
				return total + (product.qty * product.price);
			}, 0);
		});

		function addProduct() {
			if (newProduct.value.title && newProduct.value.qty > 0 && newProduct.value.price > 0) {
				invoice.value.products.push({ ...newProduct.value });
				newProduct.value = { title: '', description: '', qty: 0, price: 0 };
			}
		}

		function removeProduct(index) {
			invoice.value.products.splice(index, 1);
		}

		return {
			invoice,
			newProduct,
			getSubTotal,
			addProduct,
			removeProduct
		};
	}
}).mount('#app');