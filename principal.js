var juego= new Phaser.Game(370,550,Phaser.CANVAS,'bloque_juego');

var fondoJuego;
var flappy;
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;
var persona;

var persona2;

var estadoPrincipal={
    preload:function(){
        //carga recursos
        juego.load.image('fondo','img/bg.jpeg');
      //  juego.load.spritesheet('pajaros','img/pio.png',60,56);
      //  juego.load.spritesheet('personas','img/persona.png',64,64);

        juego.load.spritesheet('hombre','img/esque.png',68,72);
    },
    create:function(){
        //mostrar pantalla

        fondoJuego=juego.add.tileSprite(0,0,370,550,'fondo');
        juego.add.text(210,510,"Marlon Brian Ramírez Rueda",{font:"14px Arial", fill:"#FFFF"});
       /* flappy=juego.add.sprite(juego.width/2,juego.height/2,'pajaros');
        flappy.frame=1;
        flappy.animations.add('vuelo',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],10,true);
        */
        //flappy.scale.setTo(-1,1);

           persona2=juego.add.sprite(juego.width/2,juego.height/2,'hombre');
           persona2.anchor.setTo(0.5);
            persona2.animations.add('arriba',[12,13,14,15],5,true);
           persona2.animations.add('derecha',[4,5,6,7],10,true);
           persona2.animations.add('izquierda',[8,9,10,11],10,true);
            persona2.animations.add('abajo',[0,1,2,3],10,true); 
        teclaDerecha=juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        teclaIzquierda=juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        teclaArriba=juego.input.keyboard.addKey(Phaser.Keyboard.UP);
        teclaAbajo=juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        juego.physics.startSystem(Phaser.Physics.ARCADE); 
        //juego.physics.arcade.enable(flappy);
        //flappy.body.collideWorldBounds=true;
        juego.physics.arcade.enable(persona2);
          persona2.body.collideWorldBounds=true;
    },
    update:function(){
        fondoJuego.tilePosition.x-=1;
     
        //animos del juego
       // fondoJuego.tilePosition.x-=1;
      //  flappy.animations.play('vuelo');

if(teclaDerecha.isDown){
   // flappy.x++;

   persona2.position.x+=2;
   persona2.animations.play('derecha');

}
else if(teclaIzquierda.isDown){
    //flappy.x--;

      persona2.position.x-=2;
   persona2.animations.play('izquierda');
}

else if(teclaAbajo.isDown){
    //flappy.y++;

     persona2.position.y+=2;
   persona2.animations.play('abajo');
}


        
    }


};
juego.state.add('principal',estadoPrincipal);
juego.state.start('principal');