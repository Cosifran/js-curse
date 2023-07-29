//Import icons
import WcIcon from '@mui/icons-material/Wc';
import TvIcon from '@mui/icons-material/Tv';
import AirIcon from '@mui/icons-material/Air';
import SpaIcon from '@mui/icons-material/Spa';
import DeckIcon from '@mui/icons-material/Deck';
import PoolIcon from '@mui/icons-material/Pool';
import PetsIcon from '@mui/icons-material/Pets';
import WifiIcon from '@mui/icons-material/Wifi';
import IronIcon from '@mui/icons-material/Iron';
import CallIcon from '@mui/icons-material/Call';
import BadgeIcon from '@mui/icons-material/Badge';
import StoreIcon from '@mui/icons-material/Store';
import GarageIcon from '@mui/icons-material/Garage';
import ForestIcon from '@mui/icons-material/Forest';
import ShowerIcon from '@mui/icons-material/Shower';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HikingIcon from '@mui/icons-material/Hiking';
import Person4Icon from '@mui/icons-material/Person4';
import BathtubIcon from '@mui/icons-material/Bathtub';
import KitchenIcon from '@mui/icons-material/Kitchen';
import RestoreIcon from '@mui/icons-material/Restore';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import AddCardIcon from '@mui/icons-material/AddCard';
import KeySharpIcon from '@mui/icons-material/KeySharp';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import BusinessIcon from '@mui/icons-material/Business';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import ElevatorIcon from '@mui/icons-material/Elevator';
import PoolSharpIcon from '@mui/icons-material/PoolSharp';
import YardSharpIcon from '@mui/icons-material/YardSharp';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import TranslateIcon from '@mui/icons-material/Translate';
import DeckSharpIcon from '@mui/icons-material/DeckSharp';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import SportsGolfIcon from '@mui/icons-material/SportsGolf';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccessibleIcon from '@mui/icons-material/Accessible';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import HikingSharpIcon from '@mui/icons-material/HikingSharp';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AddAlertSharpIcon from '@mui/icons-material/AddAlertSharp';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import NotAccessibleIcon from '@mui/icons-material/NotAccessible';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import FireplaceSharpIcon from '@mui/icons-material/FireplaceSharp';
import CheckroomSharpIcon from '@mui/icons-material/CheckroomSharp';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import ChildCareSharpIcon from '@mui/icons-material/ChildCareSharp';
import MusicNoteSharpIcon from '@mui/icons-material/MusicNoteSharp';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import NetworkPingSharpIcon from '@mui/icons-material/NetworkPingSharp';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LocalLibrarySharpIcon from '@mui/icons-material/LocalLibrarySharp';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import TheaterComedySharpIcon from '@mui/icons-material/TheaterComedySharp';
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp';
import AirportShuttleSharpIcon from '@mui/icons-material/AirportShuttleSharp';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import BreakfastDiningSharpIcon from '@mui/icons-material/BreakfastDiningSharp';
import SportsBasketballSharpIcon from '@mui/icons-material/SportsBasketballSharp';
import HourglassDisabledSharpIcon from '@mui/icons-material/HourglassDisabledSharp';
import SignalCellular4BarSharpIcon from '@mui/icons-material/SignalCellular4BarSharp';
import LocalLaundryServiceSharpIcon from '@mui/icons-material/LocalLaundryServiceSharp';

export const amenities = [
    {
        "name": "Wi-fi gratis",
        "template": <WifiIcon />,
        "use": ['HOTEL', 'ROOM']
    },
    {
        "name": "Parqueadero gratis",
        "template": <LocalParkingIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Ascensor",
        "template": <ElevatorIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Facilidades para personas Discapacitadas",
        "template": <AccessibleForwardIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Aire acondicionado",
        "template": <AcUnitIcon />,
        "use": ['HOTEL', 'ROOM']
    },
    {
        "name": "Restaurante",
        "template": <RestaurantIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Bar",
        "template": <LocalBarIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Tiendas",
        "template": <StoreIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Servicio guardería infantil gratis",
        "template": <EscalatorWarningIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Servicio de Spa costo adicional",
        "template": <SpaIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Campo de golf",
        "template": <GolfCourseIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Gimnasio",
        "template": <FitnessCenterIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Televisión",
        "template": <TvIcon />,
        "use": ['HOTEL', 'ROOM']
    },
    {
        "name": "Minibar",
        "template": <KitchenIcon />,
        "use": ['HOTEL', 'ROOM']
    },
    {
        "name": "Plancha y mesa de plancha",
        "template": <IronIcon />,
        "use": ['HOTEL', 'ROOM']
    },
    {
        "name": "Caja fuerte",
        "template": <AccountBalanceSharpIcon />,
        "use": ['HOTEL', 'ROOM']
    },
    {
        "name": "Piscina Infantil",
        "template": <PoolIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Playa privada",
        "template": <BeachAccessIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Zona de juegos para niños",
        "template": <SportsEsportsIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Alojamiento para discapacitados",
        "template": <AccessibleIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Centro de negocios",
        "template": <BusinessIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Discoteca",
        "template": <NightlifeIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Solo adultos",
        "template": <WcIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Parqueadero costo adicional",
        "template": `${<LocalParkingIcon />} ${<AttachMoneyIcon />}`,
        "use": ['HOTEL']
    },
    {
        "name": "Servicio Niñera Costo adicional",
        "template": `${<BabyChangingStationIcon />} ${<AttachMoneyIcon />}`,
        "use": ['HOTEL']
    },
    {
        "name": "Servicio Guarderia costos adicional",
        "template": `${<EscalatorWarningIcon />} ${<AttachMoneyIcon />}`,
        "use": ['HOTEL']
    },
    {
        "name": "Wifi Costo adicional",
        "template": `${<LocalParkingIcon />} ${<AttachMoneyIcon />}`,
        "use": ['HOTEL', 'ROOM']
    },
    {
        "name": "Toallas para Playa",
        "template": <DryCleaningIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Servicio Médico",
        "template": <LocalHospitalIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Fitness Center",
        "template": <FitnessCenterIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Salón de juegos",
        "template": <SportsTennisIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Piscina",
        "template": <PoolIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Hoteles sostenibles",
        "template": <EnergySavingsLeafIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Hoteles que aceptan mascotas",
        "template": <PetsIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Habitaciones comunicadas",
        "template": <MeetingRoomIcon />,
        "use": ['HOTEL', 'ROOM']
    },
    {
        "name": "Recepción 24h",
        "template": <RoomServiceIcon />,
        "use": ['HOTEL', 'ROOM']
    },
    {
        "name": "Baño",
        "template": <BathtubIcon />,
        "use": ['HOTEL', 'ROOM']
    },
    {
        "name": "Ducha",
        "template": <ShowerIcon />,
        "use": ['HOTEL', 'ROOM']
    },
    {
        "name": "Hoteles rurales",
        "template": <ForestIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Con actividades deportivas",
        "template": <HikingIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Hoteles de playa",
        "template": <BeachAccessIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Hoteles de ciudad",
        "template": <LocationCityIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Hoteles con spa",
        "template": <SpaIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Hoteles para familias",
        "template": <FamilyRestroomIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Internet",
        "template": <WifiIcon />,
        "use": ['HOTEL', 'ROOM']
    },
    {
        "name": "Adaptado a movilidad reducida",
        "template": <AccessibleIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Hoteles con encanto",
        "template": <LocationCityIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Edificio histórico",
        "template": <LocationCityIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Hoteles esquí",
        "template": <DownhillSkiingIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Terraza Solarium",
        "template": <DeckIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Supermercado",
        "template": <StorefrontIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Aire acondicionado en zonas comunes",
        "template": <AirIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "SI Se admiten animales +5kg",
        "template": <PetsIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "NO Se admiten animales +5kg",
        "template": <PetsIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "SI Se admiten animales -5kg",
        "template": <PetsIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "NO Se admiten animales -5kg",
        "template": <PetsIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "SI Garaje",
        "template": <GarageIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "NO Garaje",
        "template": <CarCrashIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "SI Aparcamiento",
        "template": <GarageIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "NO Aparcamiento",
        "template": <CarCrashIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "SI Accesible para minusválidos",
        "template": <AccessibleIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "NO Accesible para minusválidos",
        "template": <NotAccessibleIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Stand de prensa",
        "template": <EmojiEmotionsIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Hora de salida",
        "template": <RestoreIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Alquiler de bicicletas",
        "template": <PedalBikeIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Aparcamiento",
        "template": <LocalParkingIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Garaje",
        "template": <GarageIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Alquiler de coches",
        "template": <NoCrashIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Servicio de traslados",
        "template": <DirectionsBusFilledIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Cambio de moneda",
        "template": <CurrencyExchangeIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Aparcamiento vigilado",
        "template": <LocalPoliceIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Personal multilingüe",
        "template": <TranslateIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Prensa",
        "template": <EmojiEmotionsIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Seguridad 24h.",
        "template": <LocalPoliceIcon />,
        "use": ['HOTEL', 'ROOM']
    },
    {
        "name": "Servicio de botones",
        "template": <Person4Icon />,
        "use": ['HOTEL']
    },
    {
        "name": "Se admiten animales -5kg",
        "template": <PetsIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Se admiten animales +5kg",
        "template": <PetsIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Golf-desk",
        "template": <SportsGolfIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Cargos por llegada tardía",
        "template": <AddCardIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Check-in anticipado",
        "template": <RestoreIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Salida anticipada",
        "template": <RestoreIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Llamadas nacionales e internacionales",
        "template": <CallIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Identificación a la llegada",
        "template": <BadgeIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Certificado de matrimonio",
        "template": <AdminPanelSettingsIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Servicio de aparcacoches",
        "template": <CarRepairIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Depósito a la llegada",
        "template": <PriceCheckIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Traslado al aeropuerto",
        "template": <AirportShuttleSharpIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Alojamiento gratuito para niños excepto las comidas",
        "template": <ChildCareSharpIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Salida tardía",
        "template": <HourglassDisabledSharpIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Guardarropa",
        "template": <CheckroomSharpIcon />,
        "use": ['HOTEL', 'ROOM']
    },
    {
        "name": "Chimenea",
        "template": <FireplaceSharpIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Detector de humos",
        "template": <AddAlertSharpIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Jardín",
        "template": <YardSharpIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Terraza",
        "template": <DeckSharpIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Recogida de llaves",
        "template": <KeySharpIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Cobertura teléfonos móviles",
        "template": <SignalCellular4BarSharpIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Internet por cable",
        "template": <NetworkPingSharpIcon />,
        "use": ['HOTEL', 'ROOM']
    },
    {
        "name": "Hora de entrada",
        "template": <AccessTimeSharpIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Servicio de habitaciones",
        "template": <RoomServiceIcon />,
        "use": ['HOTEL', 'ROOM']
    },
    {
        "name": "Servicio de lavandería",
        "template": <LocalLaundryServiceSharpIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Lavandería",
        "template": <LocalLaundryServiceSharpIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Espacio para bicicletas",
        "template": <PedalBikeIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Espectaculares Shows",
        "template": <TheaterComedySharpIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Pista de Baloncesto",
        "template": <SportsBasketballSharpIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Música en Vivo",
        "template": <MusicNoteSharpIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Biblioteca",
        "template": <LocalLibrarySharpIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Muro de Escalada",
        "template": <HikingSharpIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "Parque Acuático para niños",
        "template": <PoolSharpIcon />,
        "use": ['HOTEL']
    },
    {
        "name": "DESAYUNO CONTINENTAL (P.E)",
        "template": <BreakfastDiningSharpIcon />,
        "use": ['HOTEL']
    }
]

export const getIconService = (amenitie, type) => {
    return amenities.find(object => object.name == amenitie && object.use.includes(type))
}

