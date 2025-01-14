import { PageHeader } from './Components/PageHeader';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { SearchScreen } from './Components/SearchScreen/SearchScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {CrmScreen} from "./Components/CrmScreen/CrmScreen";
import {InventoryScreen} from "./Components/InventoryScreen/InventoryScreen";
import {PurchasingScreen} from "./Components/PurchasingScreen/PurchasingScreen";
import {ToastContainer} from "react-toastify";

const queryClient = new QueryClient();

function App() {
    return (
        <div className="h-full bg-slate-900">
            <QueryClientProvider client={queryClient}>
                <HashRouter>
                    <PageHeader />

                    <div className="h-full">
                        <div className="p-8 w-full max-w-7xl mx-auto text-slate-300 space-y-8">

                            <Routes>
                                <Route path="/" element={<SearchScreen/>}/>
                                <Route path="/inventory" element={<InventoryScreen/>}/>
                                <Route path="/purchasing" element={<PurchasingScreen/>}/>
                                <Route path="/crm" element={<CrmScreen/>}/>
                            </Routes>

                        </div>
                    </div>
                </HashRouter>
            </QueryClientProvider>
            <ToastContainer/>
        </div>
    );
}

export default App;
