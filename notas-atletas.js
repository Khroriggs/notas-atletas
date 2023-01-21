let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
]; 
function mediaAtletas(atletas){
    atletas.map((atleta)=>{
        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas: ${atleta.notas}`);
        let notasOrd=atleta.notas.sort((a,b)=>{return a-b});
        let notasSlice=notasOrd.slice(1,4);
        let somaNota = 0;
        for (let i = 0; i <notasSlice.length; i++) {
            somaNota+=notasSlice[i];
        }
        console.log(`Média válida: ${somaNota/notasSlice.length}`)   
    })    
} 
mediaAtletas(atletas);