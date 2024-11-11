const codes = new Map<number, string>([
	[1000, 'Unauthorized'],
	[1001, 'Empty password'],
	[1002, 'Invalid E-Mail'],
	[1003, 'Token generation error'],
	[1004, 'No profile found'],
	[1005, 'Wrong Credentials'],
	[1006, 'Empty Name'],
	[1007, 'Can’t create a user'],
	[9999, 'Session expired']
]);

export default codes;
