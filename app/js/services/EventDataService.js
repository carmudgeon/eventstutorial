eventsApp.factory('eventData', function(){
	return {
		events: [
		{
			name:"Angular Boot Camp part 1",
			date:1359781015626,
			time:'10:30 am',
			price: 34,
			imageUrl:'img/AngularJS-large.png',
			location:{
				address:'Google Headquarters',
				city:'Mountain View',
				province:'CA'
			},
			sessions:[
				{
					name:'Directives Masterclass1',
					creatorName:'Bob Smith',
					duration:'1 hr',
					level:'Advanced',
					abstract:'In this session you will learn the ins and outs of directives Introductory',
					upVoteCount:0
				},
				{
					name:'Scopes for fun and profit1',
					creatorName:'John Doe',
					duration:'30 mins',
					level:'Introductory',
					abstract:'This session will take a closer look at scopes. Learn what they do, how they do it, and how to get them to do it for you.',
					upVoteCount:0
				},
				{
					name:'Well Behaved Controllers1',
					creatorName:'Jane Doe',
					duration:'2 Hours',
					level:'Intermediate',
					abstract:'Controllers are the beginning of everything angular does. Learn how to craft controllers that will win the respect of your friends and neighbors.',
					upVoteCount:0
				}
			]
		},
		{
			name:"Angular Boot Camp part 2",
			date:1359781015626,
			time:'11:30 am',
			price: 34,
			imageUrl:'img/AngularJS-large.png',
			location:{
				address:'Google Headquarters',
				city:'Mountain View',
				province:'CA'
			},
			sessions:[
				{
					name:'Directives Masterclass2',
					creatorName:'Bob Smith',
					duration:'1 hr',
					level:'Advanced',
					abstract:'In this session you will learn the ins and outs of directives',
					upVoteCount:0
				},
				{
					name:'Scopes for fun and profit2',
					creatorName:'John Doe',
					duration:'30 mins',
					level:'Introductory',
					abstract:'This session will take a closer look at scopes. Learn what they do, how they do it, and how to get them to do it for you.',
					upVoteCount:0
				},
				{
					name:'Well Behaved Controllers2',
					creatorName:'Jane Doe',
					duration:'2 Hours',
					level:'Intermediate',
					abstract:'Controllers are the beginning of everything angular does. Learn how to craft controllers that will win the respect of your friends and neighbors.',
					upVoteCount:0
				}
			]
		},
		{
			name:"Angular Boot Camp part 3",
			date:1359781015626,
			time:'12:30 am',
			price: 34,
			imageUrl:'img/AngularJS-large.png',
			location:{
				address:'Google Headquarters',
				city:'Mountain View',
				province:'CA'
			},
			sessions:[
				{
					name:'Directives Masterclass3',
					creatorName:'Bob Smith',
					duration:'1 hr',
					level:'Advanced',
					abstract:'In this session you will learn the ins and outs of directives',
					upVoteCount:0
				},
				{
					name:'Scopes for fun and profit3',
					creatorName:'John Doe',
					duration:'30 mins',
					level:'Introductory',
					abstract:'This session will take a closer look at scopes. Learn what they do, how they do it, and how to get them to do it for you.',
					upVoteCount:0
				},
				{
					name:'Well Behaved Controllers3',
					creatorName:'Jane Doe',
					duration:'2 Hours',
					level:'Intermediate',
					abstract:'Controllers are the beginning of everything angular does. Learn how to craft controllers that will win the respect of your friends and neighbors.',
					upVoteCount:0
				}
			]
		},
	]

	};
});