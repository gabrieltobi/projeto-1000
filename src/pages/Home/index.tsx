import { QRCodeSVG } from "qrcode.react";

import { BackgroundImage } from "../../components/Backgrounds/Image";
import { TiltedBackground } from "../../components/Backgrounds/Tilted";

export const HomePage = () => {
  return (
    <div className="relative grid h-full gap-3 overflow-auto lg:grid-cols-2">
      <BackgroundImage />

      <div className="flex flex-col justify-center gap-8 bg-blue-500/80 text-center text-white lg:bg-transparent lg:text-left">
        <TiltedBackground />

        <div className="lg:pl-6">
          <div className="flex flex-col gap-5 rounded-lg p-6">
            <h1 className="text-6xl font-bold uppercase">Projeto 1000</h1>

            <p className="text-2xl font-thin">
              Ajude a acelerar a construção da igreja{" "}
              <span className="font-bold">Nova Esperança</span>.
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-lg p-6">
            <h1 className="text-2xl font-bold uppercase">
              O que é o projeto 1000?
            </h1>

            <div className="flex flex-col gap-2">
              <p className="text-lg font-thin">
                O Projeto 1000 é um acelerador de construção de igrejas. De
                forma simples e objetiva, visa arrecadar fundos e direcioná-los
                integralmente para a finalidade da proposta inicial.
              </p>
              <p className="text-lg font-thin">
                Captando, das mais diversas formas, a quantia mínima de R$
                1.000,00 ou US$ 1.000,00 ou outra moeda valorizada e que
                corresponda ao sacrifício de valor do doador, dependendo da
                localidade, por membro ou por família, em um ato de adoração.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-6">
        <div className="flex flex-col items-center gap-5 rounded-lg bg-blue-500/80 p-6 text-white shadow-md backdrop-blur-lg backdrop-contrast-50">
          <h2 className="text-6xl font-bold uppercase">Ajude Já</h2>

          <div className="rounded-md bg-white p-2">
            <QRCodeSVG value="https://reactjs.org/" size={226} />
          </div>
        </div>
      </div>
    </div>
  );
};
