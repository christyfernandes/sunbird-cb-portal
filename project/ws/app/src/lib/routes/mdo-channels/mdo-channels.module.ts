import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  PipeOrderByModule,
  PipeFilterV2Module,
} from '@sunbird-cb/utils-v2'
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTooltipModule,
  MatListModule,
  MatSidenavModule,
  MatCardModule,
  MatExpansionModule,
  MatRadioModule,
  MatChipsModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatButtonToggleModule,
  MatTabsModule,
  MatAutocompleteModule,
  MatMenuModule,
} from '@angular/material'
import { CardContentV2Module } from '@sunbird-cb/collection/src/lib/card-content-v2/card-content-v2.module'
import { HttpClient } from '@angular/common/http'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { HttpLoaderFactory } from 'src/app/app.module'
import {
  AnnouncementsModule,
  CardsModule,
  CommonMethodsService,
  CommonStripModule,
  CompetencyPassbookModule,
  CompetencyPassbookMdoModule,
  ContentStripWithTabsLibModule,
  DataPointsModule,
  SlidersLibModule,
} from '@sunbird-cb/consumption'
import { MdoChannelsComponent } from './mdo-channels/mdo-channels.component'
import { MdoChannelsMicrositeComponent } from './mdo-channels-microsite/mdo-channels-microsite.component'
import { MdoChannelsRoutingModule } from './mdo-channels-routing.module'
import { BtnPageBackModule } from '@sunbird-cb/collection/src/public-api'
import { MdoChannelFormService } from './service/mdo-channel-form.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MdoChannelDataService } from './service/mdo-channel-data.service'
import { MdoChannelsAllContentComponent } from './mdo-channels-all-content/mdo-channels-all-content.component'
import { AllContentService } from './service/all-content.service'

@NgModule({
  declarations: [MdoChannelsComponent, MdoChannelsMicrositeComponent, MdoChannelsAllContentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdoChannelsRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatExpansionModule,
    MatRadioModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatAutocompleteModule,
    PipeOrderByModule,
    PipeFilterV2Module,
    BtnPageBackModule,
    CardContentV2Module,
    ContentStripWithTabsLibModule,
    CompetencyPassbookModule,
    CompetencyPassbookMdoModule,
    DataPointsModule,
    SlidersLibModule,
    CommonStripModule,
    CardsModule,
    AnnouncementsModule,
    MatMenuModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [MdoChannelFormService, AllContentService, CommonMethodsService, MdoChannelDataService],
})
export class MDOChannelsModule { }
