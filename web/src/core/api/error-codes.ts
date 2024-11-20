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
	[1011, 'Passed fields are not valid'],
	[1012, 'Could not update avatar'],
	[1013, 'Could not update profile'],

	[9999, 'Session expired'],
	[10000, '']
]);

export default codes;
