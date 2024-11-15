const codes = new Map<number, string>([
	[1000, 'Unauthorized'],
	[1001, 'Empty password'],
	[1002, 'Invalid E-Mail'],
	[1003, 'Token generation error'],
	[1004, 'No profile found'],
	[1005, 'Wrong Credentials'],
	[1006, 'Empty Name'],
	[1007, 'Can’t create a user'],
	[1008, "We can't log you out for now"],
	[1009, 'You are trying to send new e-mail too soon. Try again in a minute'],
	[1010, 'You have entered invalid e-mail, or user is active already'],
	[1011, 'Please follow the link in the E-Mail'],

	[9999, 'Session expired']
]);

export default codes;
