import { Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { WorkoutComponent } from './components/workout/workout.component';

export const routes: Routes = [
    {
        path: 'calendar',
        component: CalendarComponent
      },
      {
        path: 'workout',
        component: WorkoutComponent
      },

];
