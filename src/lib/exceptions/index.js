export class AuthError extends Error {
	constructor(
		name,
		message = "Sorry, it seems that you are not logged in. In order to access this feature, please log in to your account or create a new account if you don't have one.",
		toRoute = "/signin",
		btnText = "Sign In"
	) {
		super(message);
		this.name = name;
		this.toRoute = toRoute;
		this.btnText = btnText;
	}
}

export class ServerError extends Error {
	constructor(
		name,
		message = "It's not you it's us! We are having some issue, please hold back!"
	) {
		super(message);
		this.name = name;
	}
}

export class EngineerError extends Error {
	constructor(
		name,
		message = "The profile you are trying to access is not found!"
	){
		super(message);
		this.name = name;
	}
}
