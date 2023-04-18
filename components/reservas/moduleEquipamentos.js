import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js';
import { getFirestore, collection, getDocs, addDoc, updateDoc, FieldValue } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore-lite.js';

const firebaseConfig = {
    apiKey: "AIzaSyD5_7JS6gQ2vxkXZHv-rM7oxoODaaxT0HQ",
    authDomain: "pimv-47f57.firebaseapp.com",
    projectId: "pimv-47f57",
    storageBucket: "pimv-47f57.appspot.com",
    messagingSenderId: "644818713679",
    appId: "1:644818713679:web:2b05a89e67beb46202be3a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const equipamentos = []
const btnSubmit = document.querySelector("#submitBtn");
const btnTest = document.querySelector("#btnTeste");

//#region setarListaDeEquipamentos
async function getEquipamentos(db) {
    const agendamentosCol = collection(db, 'agendamento');
    const agendamentoSnapshot = await getDocs(agendamentosCol);
    for (let i = 0; i < agendamentoSnapshot.docs.length; i++) {
        equipamentos.push(agendamentoSnapshot.docs[i].id);
    }
    addEquipamentOnList(equipamentos);
    const agendamentoList = agendamentoSnapshot.docs.map(doc => doc.data());
}
function addEquipamentOnList(equipaments){
    const menuEquipamentos = document.getElementById("equipamento");
    equipaments.forEach(equipament => {
        menuEquipamentos.innerHTML += '<option value="'+equipament+'">'+equipament+'</option>';
    });
}
function setEventListener(){
    btnSubmit.addEventListener("click", prepearValuesToBooking());
    btnTest.addEventListener("click", prepearValuesToBooking());
}
//#endregion

//#region  salvar registro

function prepearValuesToBooking(){
    const dateValue = document.getElementById("data").innerHTML;
    const horaValue = document.getElementById("hora").innerHTML;
    const equipamentoValue = document.getElementById("equipamento").innerHTML;
    const tempoValue = document.getElementById("tempo").innerHTML;
    sendAgendamento(dateValue, horaValue, equipamentoValue, tempoValue);
}

async function sendAgendamento(dateValue, horaValue, equipamentoValue, tempoValue){

    console.log(dateValue + horaValue + equipamentoValue + tempoValue);
    // const dateVar = new Date(dateValue+"T"+tempoValue+":00");
    const dateVar = new Date(dateValue);
    const year = dateVar.year;
    const month = dateVar.getMonth();
    try {
        const docRef = await addDoc(collection(db, "agendamento"), {
            [year]: {
                [month]:[
                    // FieldValue.ArrayUnion(Timestamp.fromDate(dateVar))
                    dateVar
                ]
            }
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

//#endregion

getEquipamentos(db);
