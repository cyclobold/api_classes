$.ajax({

	url: "https://randomuser.me/api/?results=10",
	dataType: 'json',
	method: "GET",
	success: function(feedback){
		console.log(feedback)
		feedback = feedback.results;

		console.log(feedback);



		let table = `<table>
					<thead>
						<tr> 
							<th>First name</th>
							<th>Last name</th>
						</tr>




					</thead>
					<tbody>
		`;

		for(let i = 0; i < feedback.length; i++){

			let firstname = feedback[i].name.first;
			let lastname = feedback[i].name.last;
			let title = feedback[i].name.title;

			table += `<tr>
						<td>${firstname}</td>
						<td>${lastname}</td>
						</tr>`;

		}




		table += `</tbody></table>`;





		
		/*feedback = feedback.results[0];

		const firstname = feedback.name.first;
		const lastname = feedback.name.last;
		const title = feedback.name.title;
		const gender = feedback.gender;
		const date_of_birth = feedback.dob.date;
		const age = feedback.dob.age;
		*/


		/*document.getElementById('results_id').innerHTML = 
						`<h3>${title} ${firstname}, ${lastname}</h3>
							<h5>Gender: ${gender}</h5>
						`;*/



		document.getElementById("results_id").innerHTML = table;





	},
	beforeSend(){

		document.getElementById("results_id").innerHTML = 
		`<div class="sk-chase">
		  <div class="sk-chase-dot"></div>
		  <div class="sk-chase-dot"></div>
		  <div class="sk-chase-dot"></div>
		  <div class="sk-chase-dot"></div>
		  <div class="sk-chase-dot"></div>
		  <div class="sk-chase-dot"></div>
		</div>`;

	},

	error(){

	}




})















