import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import QRCode from 'qrcode.react';

const Patent = () => {
    const [patient, setPatient] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/details/${id}`);
                if (response.data) {
                    setPatient(response.data);
                }
            } catch (error) {
                console.error("Error fetching patient data:", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="flex justify-center items-center mt-[100px]">
            {patient && (
                <div>
                    <QRCode value={JSON.stringify(patient)} /> {/* Convert patient data to a JSON string */}
                    <p>Scan the QR code to see the data of the patient</p>
                </div>
            )}
        </div>
    );
}

export default Patent;
