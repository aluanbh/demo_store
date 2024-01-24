export default async function Error() {

    return (
        <div className="absolute h-full w-full top-0 z-10" style={{ zIndex: '-1' }}>
            <div className="flex flex-col items-center justify-center w-full h-full px-12">
                <h1 className="text-4xl font-bold text-center">Houve uma falha na Autenticação</h1>
                <h2 className="text-xl font-semibold text-center mt-8">Confira suas credenciais e tente novamente ou entre em contato com o suporte.</h2>
            </div>

        </div >
    );
}