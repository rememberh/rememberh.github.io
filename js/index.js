
	var aLi = document.getElementById('photo').getElementsByTagName('li');
	var oPre = document.getElementById('pre'); 
	var oNext = document.getElementById('next');
	var aSpan = document.getElementById('num').getElementsByTagName('span'); 
	//信号量
	var count = 0;
	//执行事件
	oNext.onclick = function(){
		//信号量加加
		count++;
		//判断信号量
		if(count > 2){
			count = 0;
		}
		move();
	}
	//点击上一张
	oPre.onclick = function(){
		//信号量加加
		count--;
		//判断信号量
		if(count < 0){
			count = 2;
		}
		move();
	};
	for(var j = 0; j < aSpan.length; j++){ //3
		aSpan[j].index = j;
		aSpan[j].onmouseover = function(){
			count = this.index;
			move();
		}	
	}
	function move(){
		for(var i = 0; i < aLi.length; i++){
			aLi[i].className = '';
			aSpan[i].className = '';
		}
		aLi[count].className = 'active';
		aSpan[count].className = 'activecolor';
	}

