function Question(question, answers, correct)
	{
		this.question = question;
		this.answers = answers;
		this.correct = correct; 
	}

	Question.prototype.displayQuestion = function()
	{
		console.log(this.question);

		for (var i = 0; i < this.answers.length; i++)
		{
			console.log(i + ' : ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(ans)
	{
		if (ans === this.correct)
		{
			Skor_Akhir += 1;
			console.log('Jawaban benar !');
			console.log('');
		}
		else
		{
			console.log('Jawaban SALAH!! Coba lagi :) !');
			Salah_Jawab +=1;
			console.log('');
		}
	}

	var ql = new Question('Apakah anda tahu tentang CSS?',
	['Tahu', 'Tidak'],
	'1'); 
	var q2 = new Question('Apa singkatan dari CSS?',
	['Cascading Sensitive Sheet', 'Cascading Style Sheet', 'Case Sensitive Sheet', 'Case Style Sheet'],
	'1');
	var q3 = new Question('Apakah anda pernah menggunakan Javasript?',
	['Pernah', 'Belum Pernah', 'Belum Pernah Sama Sekali'],
	'0');
	var q4 = new Question('Tag yang digunakan untuk ganti baris?',
	['< a>', '< b>','< p>','< br>'],
	'3');
	var q5 = new Question('Siapa dosen ganteng yang mengajar matakuliah pemrograman web ?',
	['Pak Adhi', 'Pak Suyudi', 'Pak Oskar','Pak Putu'],
	'2');
    var q6 = new Question('Apakah JavaScript bahasa pemrograman paling keren sedunia ?',
	['Ya', 'Enggak'],
	'1');
    var q7 = new Question('Kata yang tepat mendeskripsikan coding ?',
	['Menyenangkan', 'Tidak Menyenangkan'],
	'0');
    var q8 = new Question('Apa fungsi tag <title> dan </title> ?',
	['membuat nama judul', 'membuat isian'],
	'0');
    var q9 = new Question('Apa yang dirasakan setelah belajar pemrograman web',
	['terharu', 'pusing', 'amazing', 'WOW'],
	'2');
    var q10 = new Question('Pasangan tag <script> dan </script> digunakan untuk?',
	['menyisipkan javascript', 'Menyisipkan pesan'],
	'0');
    var q11 = new Question('Apakah anda tahu tentang Javascript?',
	['Sedikit', 'Tidak', 'Salah satu bahasa pemrograman web', 'Ya'],
	'2');
    
	var questions = [ql, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11];
	var Skor_Akhir = 0;
	var Salah_Jawab = 0;
	var Jumlah_Pertanyaan = 0;
		
	Berhenti:
	{
		for (;;)
		{
			var n = Math.floor(Math.random() * questions.length);

			questions[n].displayQuestion();

			var answer = prompt('Pilih jawaban yang benar! Ketik "exit" untuk keluar !');

			if (answer == 'exit')
			{
				console.log('');
				console.log('===Keluar Dari Permainan===');
				console.log('');
				console.log('Jumlah pertanyaan yang di jawab = ' + Jumlah_Pertanyaan);
				console.log('Jumlah jawaban yang salah = ' + Salah_Jawab);
				console.log('Skor akhir anda = ' + Skor_Akhir);
				break Berhenti;
			}

			Jumlah_Pertanyaan += 1 ;
			questions[n].checkAnswer(answer);
		}
	}