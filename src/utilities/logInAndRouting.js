export function loggedIn(){
	// need to fill in
}

export function requireAuth(nextState, replace){
	if (!loggedIn()){
		replace({
			pathname: '/login'
		})
	}
}

export function routes(){
	return(
		<Route path="/" component={App}>
		<Route path="login" component={Login} />
		</Route>
		);
}