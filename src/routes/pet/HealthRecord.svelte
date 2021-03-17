<script lang="ts">
  import type { HealthRecordDto } from '../../services/api/pets/contracts'
  import { format } from 'date-fns'

  export let healthRecord: HealthRecordDto
</script>

<div>
  <h1>{healthRecord.title}</h1>
  <p style="white-space: pre-wrap;">{healthRecord.description}</p>
  <p>{format(healthRecord.occuredOnTimestamp, 'yyyy-MM-dd')}</p>
</div>
