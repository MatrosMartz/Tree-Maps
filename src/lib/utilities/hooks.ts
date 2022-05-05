export function isProtectedRoute(pathname: string) {
	return pathname.match(/^\/add/) != null;
}

export function isAuthenticated(cook?: string) {
	return cook?.match(/auth0.*=true/) != null;
}
