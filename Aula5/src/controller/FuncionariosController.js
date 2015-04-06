app.controller('FuncionariosController', function($scope, $http, $resource) {
	$scope.funcionarios = [];

	var resource = $resource('/funcionarios/:id');

	/**$http.get('/funcionarios').success(function(retorno) {
		$scope.funcionarios = retorno;
	}).error(function(msg){
		$scope.mensagem = "Ocorreu um erro ao obter os dados!";
		console.log(msg);
	});
	 */
    var listaFuncionarios = function(){
        resource.query(function(retorno) {
            console.log(retorno);
            $scope.funcionarios = retorno;
            $scope.mostra = true;
        });
    }

    listaFuncionarios()

    $scope.remove = function(funcionario) {
        console.log(funcionario);
        resource.delete({id: funcionario.id}, function(status) {
            listaFuncionarios();
        });
    };

});