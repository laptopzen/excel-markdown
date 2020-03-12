$('#tab2').click(() => {
	var data = $('.input').val().split('\n')
	data = data.filter(x => x != '')
	var jumlah_tab = (data[0].match(/\t/g) || []).length + 1
	var pemisah = '|'
	for (var n = 0; n < jumlah_tab; ++n){
		pemisah += '-|'
	}
	data = data.map(x => `| ${x} |`).map(x => x.replace(/\t/g, ' | '))
	var data_hasil = [].concat(data[0], pemisah)
	data.shift()
	var data_final = [].concat(data_hasil, data)
	var cetak = data_final.join('\n')
	$('.output').val(cetak)
})